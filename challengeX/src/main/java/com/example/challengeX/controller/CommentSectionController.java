package com.example.challengeX.controller;

import com.example.challengeX.exception.ResourceNotFoundException;
import com.example.challengeX.model.CommentSection;

import com.example.challengeX.repository.CommentSectionRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@CrossOrigin(origins = "*", allowedHeaders = "*")
@RestController
@RequestMapping("/api/v1/comment")
public class CommentSectionController {
    @Autowired
    private CommentSectionRepository commentSectionRepository;
    /**********************************************************************/
                            //get all comments
    /**********************************************************************/
    @GetMapping("/view")
    public List<CommentSection> getAllComments(){
        return commentSectionRepository.findAll();
    }

    /**********************************************************************/
                        // create comment rest api
    /**********************************************************************/

    @PostMapping("/create")
    public CommentSection createComment(@RequestBody CommentSection commentSection) {
        return commentSectionRepository.save(commentSection);
    }
    /**********************************************************************/
                        // get comment by id rest api
    /**********************************************************************/
    @GetMapping("/view/{comment_id}")
    public ResponseEntity<CommentSection> getCommentById(@PathVariable Long comment_id){
        CommentSection commentSection = commentSectionRepository.findById(comment_id)
                .orElseThrow(() -> new ResourceNotFoundException("User does not exist with matching id: " + comment_id));
        return ResponseEntity.ok(commentSection);
    }


    /**********************************************************************/
                            //update comment rest api
    /**********************************************************************/
    @CrossOrigin(origins = "*", allowedHeaders = "*")
    @PutMapping("/update/{comment_id}")
    public ResponseEntity<CommentSection> updateComment(@PathVariable Long comment_id, @RequestBody CommentSection commentDetails){
        CommentSection commentSection = commentSectionRepository.findById(comment_id)
                .orElseThrow(() -> new ResourceNotFoundException("User does not exist with matching id: " + comment_id));
        commentSection.setComment_txt(commentDetails.getComment_txt());

        CommentSection updatedCommentSection = commentSectionRepository.save(commentSection);
        return ResponseEntity.ok(updatedCommentSection);
    }


    /**********************************************************************/
                            //delete comment rest api
    /**********************************************************************/
    @DeleteMapping("/delete/{comment_id}")
    public ResponseEntity<Map<String, Boolean>> deleteComment(@PathVariable Long comment_id){
        CommentSection comment = commentSectionRepository.findById(comment_id)
                .orElseThrow(() -> new ResourceNotFoundException("Comment does not exist with matching id: " + comment_id));

        commentSectionRepository.delete(comment);
        Map<String, Boolean> response = new HashMap<>();
        response.put("comment deleted successfully", Boolean.TRUE);
        return ResponseEntity.ok(response);

    }



}

