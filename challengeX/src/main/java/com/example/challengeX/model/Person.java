package com.example.challengeX.model;

import javax.persistence.*;
import java.util.Date;

@Entity
@Table(name = "person")
public class Person {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long person_id;
    @Column(name = "person_name")
    private String person_name;
    @Column(name = "person_password")
    private String person_password;
    @Column(name = "person_role")
    private String person_role;
    @Column(name = "person_email")
    private String person_email;
    /*private LocalDate person_dob;*/
    @Column(name = "person_profile_picture")
    private String person_profile_picture;
    @Column(name = "person_bio")
    private String person_bio;

    @Column(name ="person_time")

    private Date person_time;

    @PrePersist
    private void onCreate(){
        person_time = new Date();
    }






    /**********************************************************************/
                            /*PERSON CONSTRUCTORS*/
    /*********************************************************************/
    public Person() {
    }

    public Person(String person_name,
                  String person_password,
                  String person_role,
                  String person_email,
                  String person_profile_picture,
                  String person_bio,
                  Date person_time) {
        this.person_name = person_name;
        this.person_password = person_password;
        this.person_role = person_role;
        this.person_email = person_email;
        this.person_profile_picture = person_profile_picture;
        this.person_bio = person_bio;
        this.person_time = person_time;
    }


    /*********************************************************************/
                        /*PERSON GETTERS && SETTERS*/
    /*********************************************************************/
    public Long getPerson_id() {
        return person_id;
    }

    public void setPerson_id(Long person_id) {
        this.person_id = person_id;
    }

    public String getPerson_name() {
        return person_name;
    }

    public void setPerson_name(String person_name) {
        this.person_name = person_name;
    }

    public String getPerson_password() {
        return person_password;
    }

    public void setPerson_password(String person_password) {
        this.person_password = person_password;
    }

    public String getPerson_role() {
        return person_role;
    }

    public void setPerson_role(String person_role) {
        this.person_role = person_role;
    }

    public String getPerson_email() {
        return person_email;
    }

    public void setPerson_email(String person_email) {
        this.person_email = person_email;
    }

    public String getPerson_profile_picture() {
        return person_profile_picture;
    }

    public void setPerson_profile_picture(String person_profile_picture) {
        this.person_profile_picture = person_profile_picture;
    }

    public String getPerson_bio() {
        return person_bio;
    }

    public void setPerson_bio(String person_bio) {
        this.person_bio = person_bio;
    }

    public Date getPerson_time() {
        return person_time;
    }

    public void setPerson_bio(Date person_time) {
        this.person_time = person_time;
    }
    /*********************************************************************/
                        /*PERSON toString() METHOD*/
    /*********************************************************************/
    @Override
    public String toString() {
        return "Person{" +
                "person_id=" + person_id +
                ", person_name='" + person_name + '\'' +
                ", person_password='" + person_password + '\'' +
                ", person_role='" + person_role + '\'' +
                ", person_email='" + person_email + '\'' +
                ", person_profile_picture='" + person_profile_picture + '\'' +
                ", person_bio='" + person_bio + '\'' +
                ", person_time='" + person_time + '\'' +
                '}';
    }

}
