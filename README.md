## Frontend Technical Test

You have been asked to create a **single page** app that converts a value from *EUR* (Euro) to *GBP* (British Pound) and viceversa. The exchange rate between these 2 currencies must be fetched from [fixer.io](https://fixer.io/documentation) REST API every **30 seconds** or **manually** when the user wants to "refresh" the rate.		    
	    
### Requirements:

1. Build using **ReactNative** and **Expo SDK**.
2. The application must feature: 
    1. State management
    2. Testing framework
    3. **Typescript** or **JavaScript ES6** Flow types

### Bonus Features:

1. Multiple currency support
2. Realtime exchange rates update.

### Using Fixer.io Rest API

To fetch the latest rates use the following endpoint. Check the [documentation](https://fixer.io/documentation) for more information.

		# Use this key. API_KEY = 1310d83b485330647e6e59ad7f9ef94d
		
		https://data.fixer.io/api/latest
		    ? access_key = API_KEY
		    & base = USD
		    & symbols = GBP,JPY,EUR
		    
### Delivery of your solution

Please, fork this repository and implement your solution on the fork repo. Once you are happy with your solution please email us the link to your solution. 
