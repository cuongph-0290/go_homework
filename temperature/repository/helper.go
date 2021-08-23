package repository

import (
	"fmt"

	"github.com/cuongph-0290/go_homework/entities"
	"github.com/go-rod/rod"
	"github.com/spf13/viper"
)

// GetTemps will get list temperature
func GetTemps(city string) []entities.Temperature {
	nextDay := viper.GetInt("nextDay") | 8

	searchURL := fmt.Sprintf("https://www.google.com/search?q=weather+%s+city", city)
	page := rod.New().MustConnect().MustPage(searchURL)

	defer page.MustClose()

	ts := []entities.Temperature{}

	page.Race().Element(".std").MustHandle(func(e *rod.Element) {
	}).Element("div.wob_df:nth-child(1) > div:nth-child(1)").MustHandle(func(e *rod.Element) {
		for i := 1; i <= nextDay; i++ {
			ts = append(ts, GetData(page, i))
		}
	}).MustDo()

	return ts
}

// GetData will get day, min, max temperature from page
func GetData(page *rod.Page, i int) entities.Temperature {
	var temprature entities.Temperature
	var tRange entities.TemperatureRange
	var selector string

	selector = fmt.Sprintf("div.wob_df:nth-child(%d) > div:nth-child(1)", i)
	temprature.Day = page.MustElement(selector).MustText()

	selector = fmt.Sprintf("div.wob_df:nth-child(%d) > div:nth-child(3) > div:nth-child(1) > span:nth-child(1)", i)
	tRange.MaxTemp = page.MustElement(selector).MustText()

	selector = fmt.Sprintf("div.wob_df:nth-child(%d) > div:nth-child(3) > div:nth-child(2) > span:nth-child(1)", i)
	tRange.MinTemp = page.MustElement(selector).MustText()

	temprature.TRange = &tRange

	return temprature
}

// ShowData will show content of temperature object
func ShowData(t entities.Temperature) string {
	day := fmt.Sprintf("%s     ", t.Day)

	return fmt.Sprintf("%s | max: %s°C, min: %s°C\n", day[0:5], t.TRange.MaxTemp, t.TRange.MinTemp)
}
