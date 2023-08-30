package com.saus.saus.services;

import java.time.LocalDate;
import java.time.LocalTime;
import java.time.format.DateTimeFormatter;

import org.springframework.stereotype.Service;

//Service para formatação das propriedades de LocalDate e LocalTime
@Service
public class TimeFormatter {

	//Formato de "H:mm"
	private final DateTimeFormatter formatter = DateTimeFormatter.ofPattern("H:mm");

	//Formato de "dd/MM/yyyy"
	private final DateTimeFormatter formatterDate = DateTimeFormatter.ofPattern("dd/MM/yyyy");

	//Metodo de formatação do time
	public LocalTime parseTime(String timeString) {
		return LocalTime.parse(timeString, formatter);
	}

	//Metodo de formatação do day
	public LocalDate parseDate(String timeString) {
		return LocalDate.parse(timeString, formatterDate);
	}

}
