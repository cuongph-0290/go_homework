package domain

type TemperatureRange struct {
	MinTemp string
	MaxTemp string
}

type Temperature struct {
	Day string
	TRange *TemperatureRange
}
