package com.example.challengeX.model;

import org.w3c.dom.Text;

import javax.persistence.*;
import java.util.Date;

@Entity
@Table(name = "comment")
public class CommentSection {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long comment_id;
    @Column(name = "person_id")
    private Long id_person;
    @Column(name = "certif_id")
    private Long id_certif;
    @Column(name = "comment_txt")
    private String comment_txt;
    @Column(name = "reply")
    private Boolean reply;

    @Column(name = "comment_time")
    private Date comment_time;

    @PrePersist
    private void onCreate(){
        comment_time = new Date();
    }

    public CommentSection() {
    }

    public CommentSection(Long id_person,
                          Long id_certif,
                          String comment_txt,
                          Boolean reply,
                          Date comment_time) {
        this.id_person = id_person;
        this.id_certif = id_certif;
        this.comment_txt = comment_txt;
        this.reply = reply;
        this.comment_time = comment_time;
    }



    public Long getId_comment() {
        return comment_id;
    }

    public void setComment_id(Long comment_id) {
        this.comment_id= comment_id;
    }

    public Long getId_person() {
        return id_person;
    }

    public void setId_person(Long id_person) {
        this.id_person = id_person;
    }

    public Long getId_certif() {
        return id_certif;
    }

    public void setId_certif(Long id_certif) {
        this.id_certif = id_certif;
    }

    public String getComment_txt() {
        return comment_txt;
    }

    public void setComment_txt(String comment) {
        this.comment_txt = comment;
    }

    public Boolean getReply() {
        return reply;
    }

    public void setReply(Boolean reply) {
        this.reply = reply;
    }

    public Date getComment_time() {
        return comment_time;
    }

    public void setComment_time(Date comment_time) {
        this.comment_time= comment_time;
    }


    @Override
    public String toString() {
        return "CommentSection{" +
                "comment_id=" + comment_id +
                ", id_person=" + id_person +
                ", id_certif=" + id_certif +
                ", comment_txt=" + comment_txt +
                ", reply=" + reply +
                ", comment_time=" + comment_time +
                '}';
    }
}
