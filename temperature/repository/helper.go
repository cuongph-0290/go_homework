package repository

import (
	"fmt"

	"github.com/go-rod/rod"
	"github.com/cuongph-0290/go_homework/domain"
)

func GetData(page *rod.Page, i int, t chan domain.Temperature) {
	var temprature domain.Temperature
	var tRange domain.TemperatureRange
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

func ShowData(t domain.Temperature) string {
	day := fmt.Sprintf("%s     ", t.Day)

	return fmt.Sprintf("%s | max: %s°C, min: %s°C\n", day[0: 5], t.TRange.MaxTemp, t.TRange.MinTemp)
}
