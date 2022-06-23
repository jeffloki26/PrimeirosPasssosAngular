import { Component, OnInit } from "@angular/core";
import { Course } from "./course";


@Component({
    selector: 'app-course-list',
    templateUrl:'./course-list.component.html'
})
export class courseListComponent implements OnInit {
    courses: Course[] = [];

    ngOnInit(): void {
        this.courses = [
            {
                id: 1,
                name: 'Angular: Forms',
                price: 99.99,
                imageUrl: '',
                code: 'xps-8796',
                duration: 120,
                rating: 4.5,
                releaseDate: 'December, 2, 2019'
            },
            {
                id: 2,
                name: 'Angular: HTTP',
                price: 45.99,
                imageUrl: '',
                code: 'lkl-1094',
                duration: 80,
                rating: 4,
                releaseDate: 'November, 2, 2019'
            }
        ]
    }

}