package br.com.jkavdev.groups.utils;

import org.modelmapper.ModelMapper;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class ConfigBeans {

    @Bean
    public ModelMapper modelMapper() {
        return new ModelMapper();
    }

}
