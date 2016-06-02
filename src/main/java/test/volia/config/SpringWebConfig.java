package test.volia.config;

import org.springframework.context.annotation.*;
import org.springframework.web.servlet.config.annotation.*;
import org.springframework.web.servlet.view.*;

/**
 *
 * @author frickua
 */
@EnableWebMvc //<mvc:annotation-driven />
@Configuration
@ComponentScan({"test.volia"})
public class SpringWebConfig extends WebMvcConfigurerAdapter {

	@Override
	public void addResourceHandlers(ResourceHandlerRegistry registry) {
		//Standart static resources
		registry.addResourceHandler("/resources/**")
				.addResourceLocations("/resources/");
		registry.addResourceHandler("/css/**")
				.addResourceLocations("/css/");
		registry.addResourceHandler("/js/**")
				.addResourceLocations("/js/");
		registry.addResourceHandler("/images/**")
				.addResourceLocations("/images/");
	}

	@Bean
	public InternalResourceViewResolver viewResolver() {
		InternalResourceViewResolver viewResolver
				= new InternalResourceViewResolver();
//		viewResolver.setViewClass(JstlView.class); // For jstl views only
		viewResolver.setPrefix("/WEB-INF/views/");
		viewResolver.setSuffix(".html");
		return viewResolver;
	}

	@Override
	public void configureDefaultServletHandling(DefaultServletHandlerConfigurer configurer) {
		configurer.enable();
	}

}

