# gRPC server to server

On one terminal run

```
$go run app/greater_server/main.go 
2021/08/20 07:36:28 server listening at [::]:8081
```

On other terminal run
```
$go run app/greater_client/main.go 
2021/08/20 07:37:02 Greeting: [Day:"Th 6" tempRang:<Max:33 Min:25 >  Day:"Th 7" tempRang:<Max:31 Min:24 >  Day:"CN" tempRang:<Max:31 Min:25 >  Day:"Th 2" tempRang:<Max:31 Min:24 >  Day:"Th 3" tempRang:<Max:31 Min:24 >  Day:"Th 4" tempRang:<Max:31 Min:24 >  Day:"Th 5" tempRang:<Max:32 Min:25 >  Day:"Th 6" tempRang:<Max:33 Min:25 > ]

$ go run app/greater_client/main.go hanoi
2021/08/20 07:37:08 Greeting: [Day:"Th 6" tempRang:<Max:33 Min:26 >  Day:"Th 7" tempRang:<Max:34 Min:27 >  Day:"CN" tempRang:<Max:37 Min:27 >  Day:"Th 2" tempRang:<Max:36 Min:27 >  Day:"Th 3" tempRang:<Max:35 Min:26 >  Day:"Th 4" tempRang:<Max:34 Min:26 >  Day:"Th 5" tempRang:<Max:32 Min:24 >  Day:"Th 6" tempRang:<Max:31 Min:24 > ]
```

# gRPC-Web

Install npm
```
npm install
```

Compiler client.js
```
npx webpack client.js
```

Run temperature server
```
go run app/greater_client/main.go 
```

Run envoy server
```
envoy -c envoy.yaml -l debug
```

Run main server
```
go run app/main.go 
```

access localhost:8080