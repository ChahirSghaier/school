import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface Comment {
  id: number;
  text: string;
  replies: Comment[];
  showReplies: boolean;
  showForm: boolean;
  replyText: string;
}

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.scss']
})
export class CommentsComponent implements OnInit {
  comments: Comment[] = [];
  commentText = '';

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.loadComments();
  }

  loadComments(): void {
    this.http.get<Comment[]>('http://localhost:8081/comments').subscribe(comments => {
      this.comments = comments;
    });
  }

  toggleReply(comment: Comment): void {
    comment.showReplies = !comment.showReplies;
    comment.showForm = false;
  }

  addReply(comment: Comment): void {
    this.http.post<Comment>('http://localhost:8081/comments/' + comment.id + '/replies', { text: comment.replyText }).subscribe(reply => {
      comment.replies.push(reply);
      comment.showForm = false;
    });
  }

  addComment(): void {
    this.http.post<Comment>('http://localhost:8081/comments', { text: this.commentText }).subscribe(comment => {
      this.comments.push(comment);
      this.commentText = '';
    });
  }
}
