# WeatherDot

WeatherDot (as in weather.mydomain.tld) is a one-route API that forwards requests from a client to the Dark Sky servers. After reading their ToS, I noticed that Dark Sky prohibits applications from requiring users to create and use their own API keys. Even though my CLI client is more of a personal project, rules is rules, and making a backend was a neat project anyway.

## The Future

This could be turned into a full custom API router that lives at one central subdomain, rather than just for weather, but that seems pointless. Maybe it could be used to give the client better features (pull from multiple sources on the backend, etc.). Who knows man.

## Todo

Add security