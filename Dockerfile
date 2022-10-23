FROM golang:1.19-buster as builder
WORKDIR /app
COPY go.* ./
RUN go mod download
COPY . ./
RUN go build -v -o server
FROM debian:buster-slim
RUN set -x && apt-get update && DEBIAN_FRONTEND=noninteractive apt-get install -y \
    --no-install-recommends \
    && rm -rf /var/lib/apt/lists/*
COPY --from=builder /app/server /app/server
EXPOSE 8080
CMD ["/app/server"]