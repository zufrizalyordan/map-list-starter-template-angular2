import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
})

export class AppComponent {
    title: string = "List with Map view";
    lat: number = -6.914744;
    lng: number = 107.609810;
    zoom: number = 14;

    messages: any[]  = [
        { avatar: 'https://randomuser.me/api/portraits/thumb/women/83.jpg', from: "Audrey", subject: "Item title 1", message: "item description. yes this is the description." },
        { avatar: 'https://randomuser.me/api/portraits/thumb/men/2.jpg', from: "Michael", subject: "Item title 2", message: "item description. yes this is the description." },
        { avatar: 'https://randomuser.me/api/portraits/thumb/women/26.jpg', from: "Francine", subject: "Item title 2", message: "item description. yes this is the description." },
        { avatar: 'https://randomuser.me/api/portraits/thumb/women/83.jpg', from: "Audrey", subject: "Item title 1", message: "item description. yes this is the description." },
        { avatar: 'https://randomuser.me/api/portraits/thumb/men/2.jpg', from: "Michael", subject: "Item title 2", message: "item description. yes this is the description." },
        { avatar: 'https://randomuser.me/api/portraits/thumb/women/26.jpg', from: "Francine", subject: "Item title 2", message: "item description. yes this is the description." }
    ];
}
