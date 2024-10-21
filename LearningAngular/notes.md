## create a component
    ng generate component <component-name> 

    ng g c <component-name>


## run your project

    ng serve

    ng serve --open
    
    ng serve --open=true

## Port 

    http://localhost:4200/

    // change port
    ng serve --port 4201

## Rendering component into another component

    say you want to render a roles component into
    appcomponent
    > go to the appcomponent ts 
    > add to the imports

    > then what--ever selector that you have, you can render
        it like and html tag


## Interpolation

        ----------------

            export class RolesComponent {

                firstName: string  = "Frank";
                id: number = 9;
                isSingle: boolean = true;
                sysRole: "admin" | "user" = "admin"

            }

        -----------------

        <p>{{firstName}}</p>
        <p>{{id}}</p>


## Install something

    say we want to add boostrap into the project
    > nmpjs.com
    > npm i bootstrap  [ copy and run it]
    > now you have to add it to your `angular.json`
        >> like something like this
            >> add "node_modules/bootstrap/dist/css/bootstrap.css" to the styles in the json file