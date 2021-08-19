package main

import (
	"context"
	"log"
	"os"
	"time"

	pb "github.com/cuongph-0290/go_homework/protobuf"
	"google.golang.org/grpc"
)

const (
	address     = "localhost:8081"
	defaultName = "tokyo"
)

func main() {
	conn, err := grpc.Dial(address, grpc.WithInsecure(), grpc.WithBlock())
	if err != nil {
		log.Fatalf("did not connect: %v", err)
	}
	defer conn.Close()
	c := pb.NewGreeterClient(conn)

	name := defaultName

	if len(os.Args) > 1 {
		name = os.Args[1]
	}

	ctx, cancel := context.WithTimeout(context.Background(), time.Minute)
	defer cancel()

	r, err := c.GetTemperature(ctx, &pb.City{Name: name})

	if err != nil {
		log.Fatalf("could not greet: %v", err)
	}
	log.Printf("Greeting: %s", r.GetTemmpInfos())
}
