import { Routes } from '@angular/router';
import { View1 } from '../src/app/view1/view1';
import { View2 } from '../src/app/view2/view2';

export const routes: Routes = [
    {
        path:"temp1",
        component:View1
    },
    {
        path:"temp2",
        component:View2
    },
    {
        path: "",
        redirectTo: "temp1",
        pathMatch: "full"
    }
    ,
    {
        path: "**",
        redirectTo: "temp1",
        pathMatch: "full"
    }
];
