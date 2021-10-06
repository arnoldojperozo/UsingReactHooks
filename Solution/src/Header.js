import React from "react";
import SignMeUp from './SignMeUp';

export const Header = () => {

    const signCallback = (email) => {
        return console.log(`Sign up called with Email ${email}`)
    }

    return (
        <div className={"jumbotron jumbotronheight"}>
            <div className={"row"}>
                <div className={"col-12 col-sm-4 text-center"}>
                    <h6 className={"text-uppercase"}>October 19-20 2021</h6>
                    <h6 className={"text-uppercase"}>San Jose, California</h6>
                </div>
                <div className={"col-12 col-sm-8 text-lg-right"}>
                    <div>
                        <img src="/SVCClogo.png" />
                    </div>
                    <h2>Sillicon Valley Code Camp</h2>
                    <div className={"row col-12 text-lg-right"}>
                        <SignMeUp signupCallback={signCallback} />
                    </div>
                </div>
            </div>
        </div>
    );

}
