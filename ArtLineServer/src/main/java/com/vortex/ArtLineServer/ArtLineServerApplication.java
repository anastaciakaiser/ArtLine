package com.vortex.ArtLineServer;

import com.vortex.ArtLineServer.auth.AuthenticationService;
import com.vortex.ArtLineServer.auth.RegisterRequest;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

import static com.vortex.ArtLineServer.user.Role.ADMIN;
import static com.vortex.ArtLineServer.user.Role.MANAGER;

@SpringBootApplication
public class ArtLineServerApplication {

	public static void main(String[] args) {
		SpringApplication.run(ArtLineServerApplication.class, args);
	}


	@Bean
	public CommandLineRunner commandLineRunner(
			AuthenticationService service
	) {
		return args -> {
			var admin = RegisterRequest.builder()
					.firstname("Admin")
					.lastname("Admin")
					.email("admin@mail.com")
					.password("password")
					.role(ADMIN)
					.build();
			System.out.println("Admin token: " + service.register(admin).getAccessToken());

			var manager = RegisterRequest.builder()
					.firstname("Manager")
					.lastname("Manager")
					.email("manager@mail.com")
					.password("password")
					.role(MANAGER)
					.build();
			System.out.println("Manager token: " + service.register(manager).getAccessToken());
		};
	}
}
