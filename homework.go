package main

import (
	"fmt"
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

type Temperature struct {
	Day string
	MinTemp string
	MaxTemp string
}

func (t *Temperature) GetData(page *rod.Page, i int) {
	var selector string

	selector = fmt.Sprintf("div.wob_df:nth-child(%d) > div:nth-child(1)", i)
	t.Day = page.MustElement(selector).MustText()

	selector = fmt.Sprintf("div.wob_df:nth-child(%d) > div:nth-child(3) > div:nth-child(1) > span:nth-child(1)", i)
	t.MaxTemp = page.MustElement(selector).MustText()

	selector = fmt.Sprintf("div.wob_df:nth-child(%d) > div:nth-child(3) > div:nth-child(2) > span:nth-child(1)", i)
	t.MinTemp = page.MustElement(selector).MustText()
}

func (t *Temperature) ShowData() string {
	day := fmt.Sprintf("%s     ", t.Day)

	return fmt.Sprintf("%s | max: %s°C, min: %s°C\n", day[0: 5], t.MaxTemp, t.MinTemp)
}

func handler(w http.ResponseWriter, r *http.Request) {
	city := r.URL.Path[1:]

	searchUrl := fmt.Sprintf("https://www.google.com/search?q=weacther+%s", city)
	page := rod.New().MustConnect().MustPage(searchUrl)

	temperatures := make([]Temperature, 8)

	_, err := page.Element("div.wob_df:nth-child(1) > div:nth-child(1)")

	if err != nil {
		// I just follow error handling document but it not working
		fmt.Fprintf(w, "City not found")
	} else {
		fmt.Fprintf(w, fmt.Sprintf("The weather of %s next 8 days \n", city))

		for i := 1; i <= 8; i ++ {
			temperatures[i - 1].GetData(page, i)

			fmt.Fprintf(w, temperatures[i - 1].ShowData())
		}
	}
}

func main() {
	http.HandleFunc("/", handler)
	log.Fatal(http.ListenAndServe(":8080", nil))
}
