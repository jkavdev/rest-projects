package br.com.jkavdev.groups.domain.evento;

import java.time.LocalDateTime;

import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.format.annotation.DateTimeFormat.ISO;

public class EventoFilter {

	@DateTimeFormat(iso = ISO.DATE_TIME)
	private LocalDateTime de;

	@DateTimeFormat(iso = ISO.DATE_TIME)
	private LocalDateTime ate;

	public LocalDateTime getDe() {
		return de;
	}
	public void setDe(LocalDateTime de) {
		this.de = de;
	}
	public LocalDateTime getAte() {
		return ate;
	}
	public void setAte(LocalDateTime ate) {
		this.ate = ate;
	}

	@Override
	public String toString() {
		return "EventoFilter [de=" + de + ", ate=" + ate + "]";
	}

}
