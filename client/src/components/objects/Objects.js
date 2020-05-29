import React, { Fragment, useContext } from "react";
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import ObjectItem from './ObjectItem';
import ObjectContext from "../../context/object/objectContext";

const Objects = () => {
    const objectContext = useContext(ObjectContext);

    const { objects, filtered } = objectContext;

    if (objects.length === 0) {
        return <h4>Please add some objects.</h4>
    }

    return (
        <Fragment>
            <TransitionGroup>
                {filtered !== null ?
                    filtered.map(obj => (
                        <CSSTransition key={obj.id} timeout={500} classNames='item'>
                            <ObjectItem object={obj} />
                        </CSSTransition>))
                    : objects.map((obj) => (
                        <CSSTransition key={obj.id} timeout={500} classNames='item'>
                            <ObjectItem object={obj} />
                        </CSSTransition>))}
            </TransitionGroup>
        </Fragment>
    );
};

export default Objects;
