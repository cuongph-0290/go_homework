package main

import (
	"fmt"
	"os"
	"log"
	"net/http"

	"github.com/go-rod/rod"
)

// My home work target is get tempratures on next 8 days of city
// It will handle request on port 8080 with params is city name
// for example http://localhost:8080/tokyo
// Use rod lib to get data from google search with params is weather and city name
// It will show result like:
// The weather of tokyo next 8 days
// Th 3  | max: 28°C, min: 24°C
// Th 4  | max: 27°C, min: 23°C
// Th 5  | max: 28°C, min: 23°C
// Th 6  | max: 31°C, min: 23°C
// Th 7  | max: 32°C, min: 23°C
// CN    | max: 33°C, min: 23°C
// Th 2  | max: 33°C, min: 24°C
// Th 3  | max: 33°C, min: 24°C

type TemperatureRange struct {
	MinTemp string
	MaxTemp string
}

type Temperature struct {
	Day string
	TRange *TemperatureRange
}

func GetData(page *rod.Page, i int, t chan Temperature) {
	var temprature Temperature
	var tRange TemperatureRange
	var selector string

	selector = fmt.Sprintf("div.wob_df:nth-child(%d) > div:nth-child(1)", i)
	temprature.Day = page.MustElement(selector).MustText()

	selector = fmt.Sprintf("div.wob_df:nth-child(%d) > div:nth-child(3) > div:nth-child(1) > span:nth-child(1)", i)
	tRange.MaxTemp = page.MustElement(selector).MustText()

	selector = fmt.Sprintf("div.wob_df:nth-child(%d) > div:nth-child(3) > div:nth-child(2) > span:nth-child(1)", i)
	tRange.MinTemp = page.MustElement(selector).MustText()

	temprature.TRange = &tRange
	t <- temprature
}

func (t *Temperature) ShowData() string {
	day := fmt.Sprintf("%s     ", t.Day)

	return fmt.Sprintf("%s | max: %s°C, min: %s°C\n", day[0: 5], t.TRange.MaxTemp, t.TRange.MinTemp)
}

func handler(w http.ResponseWriter, r *http.Request) {
	city := r.URL.Path[1:]

	searchUrl := fmt.Sprintf("https://www.google.com/search?q=weather+%s+city", city)
	page := rod.New().MustConnect().MustPage(searchUrl)

	temprature := make(chan Temperature)

	page.Race().Element(".std").MustHandle(func(e *rod.Element) {
		fmt.Fprintf(w, "City not found")
	}).Element("div.wob_df:nth-child(1) > div:nth-child(1)").MustHandle(func(e *rod.Element) {
		fmt.Fprintf(w, fmt.Sprintf("The weather of %s next 8 days \n", city))

		for i := 1; i <= 8; i ++ {
			go GetData(page, i, temprature)
		}

		for i := 1; i <= 8; i ++ {
			t := <- temprature
			fmt.Fprintf(w, t.ShowData())
		}
	}).MustDo()

}

func GetPort() string {
	if len(os.Args) == 1 {
		return "8080"
	}

	return os.Args[1]
}

func main() {
	http.HandleFunc("/", handler)
	log.Fatal(http.ListenAndServe(fmt.Sprintf(":%s", GetPort()), nil))
}
