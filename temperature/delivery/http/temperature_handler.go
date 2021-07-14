package http

import (
	"fmt"
	"net/http"

	"github.com/go-rod/rod"
	"github.com/spf13/viper"

	"github.com/cuongph-0290/go_homework/domain"
	"github.com/cuongph-0290/go_homework/temperature/repository"
)

// Handler will handle get request and retrieve city prarams from url and
// collect temperature data for next some days
func Handler(w http.ResponseWriter, r *http.Request) {
	nextDay := viper.GetInt("nextDay")
	city := r.URL.Path[1:]
	searchURL := fmt.Sprintf("https://www.google.com/search?q=weather+%s+city", city)
	page := rod.New().MustConnect().MustPage(searchURL)

	temprature := make(chan domain.Temperature)

	page.Race().Element(".std").MustHandle(func(e *rod.Element) {
		fmt.Fprintf(w, "City not found")
	}).Element("div.wob_df:nth-child(1) > div:nth-child(1)").MustHandle(func(e *rod.Element) {
		fmt.Fprintf(w, fmt.Sprintf("The weather of %s next 8 days \n", city))

		for i := 1; i <= nextDay; i++ {
			go repository.GetData(page, i, temprature)
		}

		for i := 1; i <= nextDay; i++ {
			t := <-temprature
			fmt.Fprintf(w, repository.ShowData(t))
		}
	}).MustDo()
}
