package com.vortex.ArtLineServer.auth;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data //automatically generates fields as private
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class AuthenticationRequest {

    String email;
    String password;

}
