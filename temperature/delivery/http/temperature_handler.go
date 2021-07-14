package http

import (
	"fmt"
	"net/http"

	"github.com/spf13/viper"
	"github.com/go-rod/rod"

	"github.com/cuongph-0290/go_homework/temperature/repository"
	"github.com/cuongph-0290/go_homework/domain"
)

func Handler(w http.ResponseWriter, r *http.Request) {
	nextDay := viper.GetInt("nextDay")
	city := r.URL.Path[1:]
	searchUrl := fmt.Sprintf("https://www.google.com/search?q=weather+%s+city", city)
	page := rod.New().MustConnect().MustPage(searchUrl)

	temprature := make(chan domain.Temperature)

	page.Race().Element(".std").MustHandle(func(e *rod.Element) {
		fmt.Fprintf(w, "City not found")
	}).Element("div.wob_df:nth-child(1) > div:nth-child(1)").MustHandle(func(e *rod.Element) {
		fmt.Fprintf(w, fmt.Sprintf("The weather of %s next 8 days \n", city))

		for i := 1; i <= nextDay; i ++ {
			go repository.GetData(page, i, temprature)
		}

		for i := 1; i <= nextDay; i ++ {
			t := <- temprature
			fmt.Fprintf(w, repository.ShowData(t))
		}
	}).MustDo()
}
