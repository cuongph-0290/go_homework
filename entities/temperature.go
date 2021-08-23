package entities

// TemperatureRange is temperature range, it has MinTemp, MaxTemp fields
type TemperatureRange struct {
	MinTemp string
	MaxTemp string
}

// Temperature is temperature object, it has Day, TRange fields
type Temperature struct {
	Day    string
	TRange *TemperatureRange
}
