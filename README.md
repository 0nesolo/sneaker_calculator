broodcapital.com/#/calculator/

##Installation
Global
>npm install -g sneaker-calculator

Locally
>npm install sneaker-calculator
##Usage

```  
 $ solo --help

   Usage: solo [options]

   Options:
    -h, --help                       								  Output usage information
    -V, --version                    								  Output the version number
	-n --sneakerName [sneakerName]                                    Name of sneaker
	-c --sneakerCost [sneakerCost]                                    Cost of sneaker
	-f --sneakersQuantityForFree [sneakersQuantityForFree]            Sneakers quantity for free
	-r --sneakersQuantityForResale [sneakersQuantityForResale]        Sneakers quantity for resale
	-a --associatesQuantity [associatesQuantity]                      Associates quantity that will be working
	-p --associatesHours [associatesHours]                            Hours associates spend online
	-h --associatesPayPerHour [associatesPayPerHour]                  Associates pay per hour
     
    Examples:
     $ solo -h
     $ solo --help

```

##Examples
```

 - without associates
 $ solo --sneakerName AirJordans --sneakerCost 162.33 --sneakersQuantityForFree 3 --sneakersQuantityForResale 3

 - w/ associates
 $ solo --sneakerName AirJordans --sneakerCost 162.33 --sneakersQuantityForFree 3 --sneakersQuantityForResale 3 --associatesQuantity 4 --associatesHours 4 --associatesPayPerHour 5
