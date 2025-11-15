package com.musejournal.config;

import java.io.FileInputStream;

import javax.annotation.PostConstruct;

import org.springframework.context.annotation.Configuration;

import com.google.auth.oauth2.GoogleCredentials;
import com.google.firebase.FirebaseApp;
import com.google.firebase.FirebaseOptions;

@Configuration
public class FirebaseAdminConfig {
  @PostConstruct
  public void init() throws Exception {
    if (FirebaseApp.getApps().isEmpty()) {
      FirebaseOptions options = FirebaseOptions.builder()
        .setCredentials(GoogleCredentials.fromStream(new FileInputStream(System.getenv("FIREBASE_CREDENTIALS_PATH"))))
        .build();
      FirebaseApp.initializeApp(options);
    }
  }
}