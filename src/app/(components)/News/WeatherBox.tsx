import React, { useEffect, useState } from 'react';
import { StyleSheet, Dimensions, Image, Linking, TouchableOpacity, View, Text } from 'react-native';
import { globalFont, global, newsFeedSites } from '../../../customs';

const url = "https://api.open-meteo.com/v1/forecast?latitude=38.5816&longitude=-121.4944&current=temperature_2m,is_day,precipitation,weather_code,cloud_cover&hourly=temperature_2m,is_day,precipitation_probability,weather_code,cloud_cover&daily=sunrise,sunset&temperature_unit=fahrenheit&wind_speed_unit=mph&precipitation_unit=inch&timezone=America%2FLos_Angeles&forecast_days=2";

const borderOffset = 20;

const WeatherBox: React.FC = () => {
	const [currentWeatherData, setCurrentWeatherData] = useState<any>([]);
	const [futureWeatherData, setFutureWeatherData] = useState<any[]>([]);
	const [isLoading, setIsLoading] = useState<Boolean>(true);


	const fetchWeatherData = async () => {
		try {
			const responses = await fetch(url, { headers: { 'Accept': 'application.json' } });

			const response = await responses.json()

			const hourIndex = response.hourly.time.findIndex((item: any) => {
				return (item > response.current.time);
			});
			const hourEndingIndex = hourIndex + 5;
			const unformattedFutureData = ([response.hourly.cloud_cover.slice(hourIndex, hourEndingIndex), response.hourly.precipitation_probability.slice(hourIndex, hourEndingIndex), response.hourly.temperature_2m.slice(hourIndex, hourEndingIndex), response.hourly.time.slice(hourIndex, hourEndingIndex), response.hourly.is_day.slice(hourIndex, hourEndingIndex), response.hourly_units.temperature_2m]);
			let futureWeatherArray = new Array();
			for (let count = 0; count < unformattedFutureData[0].length; count++) {
				futureWeatherArray[count] = (
					{
						'cloud_cover': unformattedFutureData[0][count],
						'precipitation_probability': unformattedFutureData[1][count],
						'temp': unformattedFutureData[2][count],
						'time': unformattedFutureData[3][count],
						'isDay': unformattedFutureData[4][count],
						'temp_unit': unformattedFutureData[5],
						'icon': weatherIcon(unformattedFutureData[1][count], 0, unformattedFutureData[0][count], unformattedFutureData[4][count])
					}
				);
			}

			setCurrentWeatherData(
				{
					'cloud_cover': response.current.cloud_cover,
					'precipitation': response.current.precipitation,
					'temp': response.current.temperature_2m,
					'isDay': response.current.is_day,
					'temp_unit': response.current_units.temperature_2m,
					'icon': weatherIcon(0, response.current.precipitation, response.current.cloud_cover, response.current.is_day)
				});

			setFutureWeatherData(futureWeatherArray);

			setIsLoading(false);
		} catch (error) {
			console.error('Error fetching weather data:', error);
		}
	}

	const weatherIcon = (precipitation_probability: number, precipitation: number, cloud_cover: number, isDay: number) => {
		if (precipitation_probability >= 15 || precipitation > 0) {
			return require('../../../assets/png/rain.png');
		} else if (cloud_cover >= 70) {
			return require('../../../assets/png/cloudy.png');
		} else if (cloud_cover >= 35) {
			if (isDay == 1) {
				return require('../../../assets/png/partlyCloudyDay.png');
			} else {
				return require('../../../assets/png/partlyCloudyNight.png');
			}
		} else if (isDay == 1) {
			return require('../../../assets/png/day.png');
		} else {
			return require('../../../assets/png/night.png');
		}
	}

	useEffect(() => {
		fetchWeatherData();
	}, []);

	return (
		<View style={styles.WeatherBoxWrapper}>
			{!isLoading ?
				<>
					<View style={styles.CurrentTempWrapper}>
						<Text style={{ color: global.baseGrey200, fontSize: Dimensions.get('screen').width * 0.02, fontWeight: 'bold' }}>Current Temp:</Text>
						<Text style={styles.CurrentTempText}>{`${currentWeatherData.temp.toString().substring(0, 2)} ${currentWeatherData.temp_unit.toString().substring(0, 1)}`}</Text>
						<View style={styles.TempIconBorder}></View>
						<Image style={styles.WeatherIcon} source={(currentWeatherData.icon)} />

					</View>
					<View style={styles.FutureTempWrapper}>
						<Text style={{ color: global.baseGrey200, fontSize: Dimensions.get('screen').width * 0.025, fontWeight: 'bold', marginLeft: '3%' }}>Todays Forecast:</Text>
						<View style={styles.SecondaryFutureTempWrapper}>
							{futureWeatherData.map((item) => {

								return (
									<View key={Math.random()} style={styles.IndividualFutureTempWrapper}>
										<Text  style={styles.IndividualTempText}>{`${item.temp.toString().substring(0, 2)} ${item.temp_unit.toString().substring(0, 1)}`}</Text>
										<Text  style={styles.IndividualTimeText}>{new Date(item.time).getHours() > 12 ? (new Date(item.time).getHours() - 12).toString() + ' pm' 
										: new Date(item.time).getHours() != 0 ? new Date(item.time).getHours().toString() + ' am' 
										: '12 am'}</Text>
										<Image  style={styles.SmallerWeatherIcon} source={(item.icon)} />
									</View>
								);
							})
							}
						</View>
					</View>
				</>
				: <></>
			}
		</View>
	);
}

export default WeatherBox;

const styles = StyleSheet.create({
	WeatherBoxWrapper: {
		width: Dimensions.get('screen').width * 0.9,
		height: '12%',
		position: 'relative',
		marginLeft: Dimensions.get('screen').width * 0.05,
		backgroundColor: global.baseBackground300,
		borderRadius: borderOffset,
		justifyContent: 'center',
		alignItems: 'center',
		display: 'flex',
		flexDirection: 'row'
	},
	CurrentTempWrapper: {
		width: '25%',
		height: '80%',
		position: 'relative',
		flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: global.baseBackground100,
		borderRadius: borderOffset,
	},
	CurrentTempText: {
		color: 'black',
		fontSize: Dimensions.get('screen').width * 0.05,
		fontWeight: 'bold',
	},
	TempIconBorder: {
		width: '85%',
		height: 1,
		position: 'relative',
		backgroundColor: global.baseGrey200,
		marginVertical: '3%',
	},
	WeatherIcon: {
		width: '25%',
		height: '25%',
		marginTop: '5%',
	},
	FutureTempWrapper: {
		width: '68%',
		height: '80%',
		flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'flex-start',
		marginTop: '2%',
	},
	SecondaryFutureTempWrapper: {
		width: '100%',
		height: '66%',
		flexDirection: 'row',
		justifyContent: 'flex-start',
		alignItems: 'center',
		marginTop: '1%',
	},
	IndividualFutureTempWrapper: {
		width: '19%',
		height: '100%',
		flexDirection: 'column',
		justifyContent: 'flex-start',
		alignItems: 'center',
		marginLeft: '1.7%',
	},
	IndividualTempText: {
		color: 'black',
		fontSize: Dimensions.get('screen').width * 0.04,
	},
	IndividualTimeText: {
		color: global.baseGrey200,
		fontSize: Dimensions.get('screen').width * 0.028,
		fontWeight: 'bold',
	},
	SmallerWeatherIcon: {
		width: '40%',
		height: '40%',
		marginTop: '0%',
	},
});