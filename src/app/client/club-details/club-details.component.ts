import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { ClubServiceService } from "src/app/services/club/club-service.service";
import { CommentServiceService } from "src/app/services/comment/comment-service.service";

@Component({
  selector: 'app-club-details',
  templateUrl: './club-details.component.html',
  styleUrls: ['./club-details.component.css']
})
export class ClubDetailsComponent implements OnInit {

  club: any;
  content: string = ''; 
  comments : any = [];

  constructor(
    private route: ActivatedRoute,
    private clubService: ClubServiceService,
    private commentService: CommentServiceService,
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const clubId = +params['id'];
      if (clubId) {
        this.loadClubDetails(clubId);
      }
    });

    this.FindAllComments();
  }


  FindAllComments(){
    this.commentService.FindAll().subscribe({
      next : (response) => {
        console.log(response);
          this.comments = response.comments;
      },

      error : (err) => console.log(err)
    })
  }

  loadClubDetails(clubId: number): void {
    this.clubService.getClubById(clubId).subscribe({
      next: (response) => {
        this.club = response.club;
        console.log(response);
      },
      error: (err) => console.error(err),
    });
  }

  saveComment(): void {
    const commentData = {
      content: this.content,
      club_id: this.club?.id,
    };
    this.commentService.save(commentData).subscribe({ 
      next: (response) => {
        console.log('Comment saved:', response.comments);
        this.content = '';
      },
      error: (err) => console.error(err),
    });
  }
}
