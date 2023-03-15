package com.example.challengeX.controller;

import com.example.challengeX.exception.ResourceNotFoundException;
import com.example.challengeX.model.Person;
import com.example.challengeX.repository.PersonRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;


import java.util.HashMap;
import java.util.List;
import java.util.Map;

@CrossOrigin(origins = "*", allowedHeaders = "*")
@RestController
@RequestMapping("/api/v1/person")
public class PersonController {

    @Autowired
    private PersonRepository personRepository;

    /**********************************************************************/
                            //get all persons
    /**********************************************************************/
        @GetMapping("/view")
        public List<Person> getAllPerson(){
            return personRepository.findAll();
        }

    /**********************************************************************/
                        // create person rest api
    /**********************************************************************/

    @PostMapping("/create")
    public Person createPerson(@RequestBody Person person) {
        return personRepository.save(person);
    }


    /**********************************************************************/
                        // get person by id rest api
    /**********************************************************************/
    @GetMapping("/view/{person_id}")
    public ResponseEntity<Person> getPersonById(@PathVariable Long person_id){
        Person person = personRepository.findById(person_id)
                .orElseThrow(() -> new ResourceNotFoundException("User does not exist with matching id: " + person_id));
        return ResponseEntity.ok(person);
    }
    /**********************************************************************/
                             //update person rest api
    /**********************************************************************/
    @PutMapping("/update/{person_id}")
    public ResponseEntity<Person> updatePerson(@PathVariable Long person_id, @RequestBody Person personDetails){
        Person person = personRepository.findById(person_id)
                .orElseThrow(() -> new ResourceNotFoundException("User does not exist with matching id: " + person_id));
        person.setPerson_name(personDetails.getPerson_name());
        person.setPerson_password(personDetails.getPerson_password());
        person.setPerson_email(personDetails.getPerson_email());
        person.setPerson_profile_picture(personDetails.getPerson_profile_picture());
        person.setPerson_bio(personDetails.getPerson_bio());

        Person updatedPerson = personRepository.save(person);
        return ResponseEntity.ok(updatedPerson);
    }



    /**********************************************************************/
                                     //delete person rest api
    /**********************************************************************/
    @DeleteMapping("/delete/{person_id}")
    public ResponseEntity<Map<String, Boolean>> deletePerson(@PathVariable Long person_id){
        Person person = personRepository.findById(person_id)
                .orElseThrow(() -> new ResourceNotFoundException("User does not exist with matching id: " + person_id));

        personRepository.delete(person);
        Map<String, Boolean> response = new HashMap<>();
        response.put("deleted successfully", Boolean.TRUE);
        return ResponseEntity.ok(response);

    }

}
