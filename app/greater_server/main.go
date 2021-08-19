package main

import (
	"context"
	"log"
	"net"
	"strconv"

	pb "github.com/cuongph-0290/go_homework/protobuf"
	"github.com/cuongph-0290/go_homework/temperature/repository"
	"google.golang.org/grpc"
)

const (
	port = ":8081"
)

type server struct {
	pb.UnimplementedGreeterServer
}

func (s *server) GetTemperature(ctx context.Context, in *pb.City) (*pb.Temperature, error) {
	log.Printf("Receive: %v", in.GetName())

	ts := repository.GetTemps(in.GetName())
	var tempInfos []*pb.Temperature_TempInfo

	for _, t := range ts {
		var tInfo pb.Temperature_TempInfo
		tInfo.Day = t.Day

		var tRange pb.Temperature_TempRange

		i, _ := strconv.Atoi(t.TRange.MaxTemp)
		tRange.Max = int32(i)

		i, _ = strconv.Atoi(t.TRange.MinTemp)
		tRange.Min = int32(i)

		tInfo.TempRang = &tRange

		tempInfos = append(tempInfos, &tInfo)
	}

	return &pb.Temperature{TemmpInfos: tempInfos}, nil
}

func main() {
	lis, err := net.Listen("tcp", port)
	if err != nil {
		log.Fatalf("Failed o listen: %v", err)
	}
	s := grpc.NewServer()

	pb.RegisterGreeterServer(s, &server{})

	log.Printf("server listening at %v", lis.Addr())

	if err := s.Serve(lis); err != nil {
		log.Fatalf("failed to server: %v", err)
	}
}
