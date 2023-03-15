package com.example.challengeX.model;

import javax.persistence.*;

import java.util.Date;

@Entity
@Table(name = "certif")
public class Certif {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long certif_id;
    @Column(name = "certif_title")
    private String certif_title;
    @Column(name = "certif_description")
    private String certif_description;
    @Column(name = "certif_prix")
    private String certif_prix;

//    @Column(name = "project_file_upload")
//    private String project_file_upload;
    @Column(name = "certif_image_upload")
    private String certif_image_upload;
//    @Column(name = "project_likes")
//    private int project_likes;
//    @Column(name = "project_body")
//    private String project_body;
    @Column(name = "certif_time", nullable = false)
    private Date certif_time;
//
//    @Column(name = "project_tags")
//    private String project_tags;
//
//    @Column(name = "project_type")
//    private String project_type;

    @PrePersist
    private void onCreate(){
        certif_time = new Date();
    }

    /**********************************************************************/
                              //PROJECT CONSTRUCTORS
    /**********************************************************************/
    public Certif() {
    }
    public Certif(String certif_title,
                  String certif_description,
                  String certif_prix,
                  String certif_image_upload,
                  Date certif_time) {
        this.certif_title = certif_title;
        this.certif_description = certif_description;
        this.certif_prix = certif_prix;
        this.certif_image_upload = certif_image_upload;
        this.certif_time = certif_time;
    }




    /**********************************************************************/
                            //PROJECT GETTERS && SETTERS
    /**********************************************************************/
    public Long getCertif_id() {
        return certif_id;
    }

    public void setCertif_id(Long certif_id) {
        this.certif_id = certif_id;
    }

    public String getCertif_title() {
        return certif_title;
    }

    public void setCertif_title(String certif_title) {
        this.certif_title = certif_title;
    }

    public String getCertif_description() {
        return certif_description;
    }

    public void setCertif_description(String certif_description) {
        this.certif_description = certif_description;
    }

    public String getCertif_prix() {
        return certif_prix;
    }

    public void setCertif_prix(String certif_prix) {
        this.certif_prix = certif_prix;
    }

    public String getCertif_image_upload() {
        return certif_image_upload;
    }

    public void setCertif_image_upload(String certif_image_upload) {
        this.certif_image_upload = certif_image_upload;
    }

    public Date getCertif_time() {
        return certif_time;
    }

    public void setCertif_time(Date certif_time) {
        this.certif_time = certif_time;
    }
/**********************************************************************/
                            //PROJECT toString() METHOD
    /**********************************************************************/
    @Override
    public String toString() {
        return "Certif{" +
                "certif_id=" + certif_id +
                ", certif_title='" + certif_title + '\'' +
                ", certif_description='" + certif_description + '\'' +
                ", certif_prix='" + certif_prix + '\'' +
                ", certif_image_upload='" + certif_image_upload + '\'' +
                ", certif_time=" + certif_time +
                '}';
    }
}
