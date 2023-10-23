# L3 Electricity Price-App

## Project description
Welcome to the electricity price application, an app that helps you view electricity prices for different regions in Sweden. Using cutting-edge technologies such as JavaScript and Node.js, the application provides an intuitive and user-friendly interface for monitoring electricity prices. Whether you're a homeowner looking to save on energy costs, a business owner managing expenses, or just an enthusiast interested in staying informed, my app offers the tools you need.

**Key Features:**
- **Today's Prices:** Get up-to-date electricity prices for various regions.
- **30-Day History:** Explore historical prices to spot trends.
- **Advanced Calculations:** Calculate average, minimum, maximum, median, and standard deviation for today's prices.
- **Data Visualization:** View electricity prices in both graph and table formats for better insights.

It has been very fun to develope this webb-appliction and I hope you will enjoy it as much as I do.

### Prerequisites
- Konwledge in Visual Studio Code

## Installation Instructions
### Clone the project
To install the application, begin by cloning the project from GitHub. You can find the project on GitHub at [https://github.com/nellyolofsson/L3.git](https://github.com/nellyolofsson/L3.git). To clone it, follow these steps:
1. Click on the "Code" button and copy the provided URL.
2. Open your terminal and navigate to the directory where you want to clone the project.
3. Use the following command to clone the project:
```bash

git clone https://github.com/nellyolofsson/L3.git

```
### Download the project
Or you can download the project as a zip-file and extract it to the directory where you want to clone the project.

1. Click on the "Code" button and choose "Download ZIP".
2. Extract the zip-file to the directory where you want to clone the project.

### Open project in Visual Studio Code
After cloning the project, you can open it in Visual Studio Code. Follow these steps to proceed:

1. Open Visual Studio Code.
2. Use the "Open Folder" feature to select the project folder where you've cloned the project.

### Install packages
Next, you'll need to install all the necessary packages for the application. Follow these steps to do so:

1. In the terminal, navigate to the project folder.
2. Run the following command to install the required packages:

```bash

npm install

```
### -env file
With all the packages installed, create a .env file in the project's root folder. Follow these steps to set up the .env file:

1. Create a new file in the root folder.
2. Name the file .env.
3. Add the following content to the .env file:

```javascript

PORT=3000
BASE_URL="/"
SESSION_NAME="asfdgkdfgaerr"
SESSION_SECRET="gfdgdfgksfenffff"

```
### Start the application
Now, you can start the application. Follow these steps to begin:

1. In the terminal, navigate to the project folder.
2. Run the following command to start the application:

```bash

npm run dev

```
### View the application
1. In the terminal click on the webb-link to view the application.
2. http://localhost:3000/ 

That's it! You've successfully set up and launched the application.

## Usage
Once you have started the application, you can view electricity prices for different regions in Sweden. You can see electricity prices for today, the last 30 days. It also calculates the prices in average, min, max, median and standard deviation. You can view electricity prices in both a graph and a table.

## Examples
![Elpriser](./images/elpriser.png)

## Status
This project is currently in active development.

Here's what you can do with the app right now:

- View electricity prices for today, including average, minimum, maximum, median, and standard deviation calculations.
- Analyze electricity prices for the last 30 days. 
- Enjoy color-coded visualization of prices in the last 30 days based on their value, making it easy to spot high and low prices.

## Future Plans

I have exciting plans for the future of this project:

- Implement a feature that enables you to compare electricity prices across different regions in Sweden.
- Enhance data visualization by introducing color-coding in the graphs. Prices will be represented in different colors to signify whether they are high or low, similar to the feature already present in the last 30 days view.
- Expand the application's utility by providing practical use case examples. You'll soon be able to see the cost of running common appliances, such as taking a shower, charging a phone, or cooking a meal, giving you real-world insights into how electricity prices affect your daily life.

## Links to other documentation

- swedish-electricity-prices-region on npm: This module is the backbone of my electricity price application. It allows my to fetch and calculate electricity prices in Sweden, providing historical data and various metrics for analysis.

- Chart.js on npm: I utilize Chart.js to create interactive and visually appealing graphs to represent electricity price data. It's a versatile library for charting and graphing that complements my application's data visualization capabilities.

## License

This project is licensed under the [ISC License](https://github.com/nellyolofsson/L3/blob/main/LICENSE.md) - see the [license file](https://github.com/nellyolofsson/L3/blob/main/LICENSE.md) for details.
