package main

import (
	"log"
	"net/http"

	_temperatureHandler "github.com/cuongph-0290/go_homework/temperature/delivery/http"
	"github.com/spf13/viper"
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

func init() {
	viper.SetConfigFile("config.json")
	err := viper.ReadInConfig()

	if err != nil {
		panic(err)
	}

	if viper.GetBool("debug") {
		log.Println("Service RUN on DEBUG mode")
	}
}

func main() {
	http.HandleFunc("/city/", _temperatureHandler.Handler)
	http.Handle("/", http.FileServer(http.Dir("./")))
	log.Fatal(http.ListenAndServe(viper.GetString("server.port"), nil))
}
