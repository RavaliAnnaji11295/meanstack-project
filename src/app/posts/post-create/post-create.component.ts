import { Component,EventEmitter,Output } from '@angular/core';
import { Post } from '../post.model';
import { NgForm } from '@angular/forms';
import { PostsService } from '../post.service';
@Component({
    selector:'app-post-create',
    templateUrl:'./post-create.component.html',
    styleUrls:['./post-create.component.css']
})
export class PostCreateComponent{
    enteredTitle = '';
    enteredContent = '';
    // @Output() PostCreated = new EventEmitter<Post>();

    constructor(public postsService:PostsService){}
        onAddPost(form:NgForm){
        // alert("post added");
        // this.newPost = 'The user\'s post';
        // this.newPost = postInput.value;
        // this.newPost = this.enteredValue;
        // const post:Post = {
        //     title:this.enteredTitle,
        //     content:this.enteredContent
        // };
        if(form.invalid){
            return;
        }
        // const post:Post = {
        //     title:form.value.title,
        //     content:form.value.content
        // };
        // this.PostCreated.emit(post);
        this.postsService.addPost(form.value.title,form.value.content)
        form.resetForm();
    }
}