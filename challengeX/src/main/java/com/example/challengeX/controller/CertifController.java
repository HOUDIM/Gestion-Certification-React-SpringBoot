package com.example.challengeX.controller;

import com.example.challengeX.exception.ResourceNotFoundException;
import com.example.challengeX.model.Certif;
import com.example.challengeX.repository.CertifRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@CrossOrigin(origins = "*", allowedHeaders = "*")
@RestController
    @RequestMapping("/api/v1/certif")
public class CertifController {
    @Autowired
    private CertifRepository certifRepository;


/********************************************************************/
                                //get all projects
/********************************************************************/

    @GetMapping("/view")
    public List<Certif> getAllCertif(){
        return certifRepository.findAll();
    }



/********************************************************************/
                                //create project rest api
/********************************************************************/

    @PostMapping ("/create")
    public Certif createCertif(@RequestBody Certif certif) {
        return certifRepository.save(certif);
    }


/********************************************************************/
                        // get project by id rest api
/********************************************************************/

    @GetMapping("/view/{certif_id}")
    public ResponseEntity<Certif> getCertifById(@PathVariable Long certif_id){
        Certif certif = certifRepository.findById(certif_id)
                .orElseThrow(() -> new ResourceNotFoundException("Certif does not exist with matching id: " + certif_id));
        return ResponseEntity.ok(certif);
    }

/********************************************************************/
                            //update project rest api
/********************************************************************/


       @PutMapping("/update/{certif_id}")
        public ResponseEntity<Certif> updateCertif(@PathVariable Long certif_id, @RequestBody Certif certifDetails){
        Certif certif = certifRepository.findById(certif_id)
                .orElseThrow(() -> new ResourceNotFoundException("Certif does not exist with matching id: " + certif_id));
        certif.setCertif_title(certifDetails.getCertif_title());
        certif.setCertif_description(certifDetails.getCertif_description());
        certif.setCertif_prix(certifDetails.getCertif_prix());
        certif.setCertif_image_upload(certifDetails.getCertif_image_upload());
        final Certif updatedCertif = certifRepository.save(certif);
        return ResponseEntity.ok(updatedCertif);
    }

/********************************************************************/
                        //delete project rest api
/********************************************************************/

    @DeleteMapping("/delete/{certif_id}")
    public ResponseEntity<Map<String, Boolean>> deleteCertif(@PathVariable Long certif_id){
        Certif certif = certifRepository.findById(certif_id)
                .orElseThrow(() -> new ResourceNotFoundException("Certif does not exist with matching id: " + certif_id));

        certifRepository.delete(certif);
        Map<String, Boolean> response = new HashMap<>();
        response.put("deleted successfully", Boolean.TRUE);
        return ResponseEntity.ok(response);

    }

}
