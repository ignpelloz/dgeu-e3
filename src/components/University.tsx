import * as React from 'react';

export interface IUniversityClasses<T> {
    one: T;
    two: T;
    three: T;
    four: T;
    five: T;
    six: T;
    seven: T;
    eight: T;
    nine: T;
    ten: T;
}

export interface IUniversityProps {
    href: string;
    imgSrc: string;
    title: string;
    uniText: string;
    wrapperItemCounter: string;
    classes: IUniversityClasses<string>;
}

interface IUniversityState {
    href: string;
    imgSrc: string;
    title: string;
    uniText: string;
    wrapperItemCounter: string;
}

class University extends React.Component<IUniversityProps, IUniversityState> {

    constructor(props: IUniversityProps) {
        super(props);
        this.state = {
            href: this.props.href,
            imgSrc: this.props.imgSrc,
            title: this.props.title,
            uniText: this.props.uniText,
            wrapperItemCounter: this.props.wrapperItemCounter,
        };
    }

    public toIF(wpCounter: string) {
        /*
        Convierte string en
        */
        switch (wpCounter) {
            case "one":
                return this.props.classes.one
            case "two":
                return this.props.classes.two
            case "three":
                return this.props.classes.three
            case "four":
                return this.props.classes.four
            case "five":
                return this.props.classes.five
            case "six":
                return this.props.classes.six
            case "seven":
                return this.props.classes.seven
            case "eight":
                return this.props.classes.eight
            case "nine":
                return this.props.classes.nine
            case "ten":
                return this.props.classes.ten
        }
    }

    public render() {
        let wpCount = this.toIF(this.state.wrapperItemCounter);
        return (
            <div className={wpCount}> 
            <p>
                <a href={this.state.href} target="_blank" rel="noopener noreferrer">
                    <img loading="lazy" className="aligncenter" title={this.state.title} src={this.state.imgSrc} alt={this.state.title} width="105" height="105" />
                </a>
                <div dangerouslySetInnerHTML={{
                    __html: this.state.uniText
                }}></div>
            </p>
            </div>

        );
    }
}
export default University;
