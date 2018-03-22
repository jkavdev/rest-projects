package br.com.jkavdev.groups.domain.noticia;

import java.util.Arrays;
import java.util.List;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/noticias")
@CrossOrigin("*")
public class NoticiaController {
	
	@GetMapping("/topicos")
	public Topico[] topicos(){
		return Topico.values();
	}
	@GetMapping("/topicosList")
	public List<Topico> topicosList(){
		return Arrays.asList(Topico.values());
	}

}
