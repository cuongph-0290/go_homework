package http

import (
	"fmt"
	"net/http"

	"github.com/cuongph-0290/go_homework/temperature/repository"
	"github.com/spf13/viper"
)

// Handler will handle get request and retrieve city prarams from url and
// collect temperature data for next some days
func Handler(w http.ResponseWriter, r *http.Request) {
	nextDay := viper.GetInt("nextDay")
	city := r.URL.Path[1:]

	ts := repository.GetTemps(city)

	if len(ts) == 0 {
		fmt.Fprintf(w, "City not found")
	} else {
		fmt.Fprintf(w, fmt.Sprintf("The weather of %s next 8 days \n", city))

		for i := 1; i <= nextDay; i++ {
			t := ts[i-1]
			fmt.Fprintf(w, repository.ShowData(t))
		}
	}
}
