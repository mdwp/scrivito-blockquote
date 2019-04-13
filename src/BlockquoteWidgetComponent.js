import * as React from 'react';
import * as Scrivito from 'scrivito';

Scrivito.provideComponent('BlockquoteWidget', ({ widget }) => {
    const classNames = [];
    const alignment = widget.get('alignment') || 'left'

        classNames.push(`text-${alignment}`);
        if(alignment !== 'center') {
            classNames.push(`border-${alignment}`);
            classNames.push(`padding-${alignment}`);
        }

    return (


            <blockquote className= { classNames.join(' ') + ' blockquote mb-0 pr-3'}>
            <Scrivito.ContentTag
                tag="p"
                className="mb-2 font-italic"
                content={widget}
                attribute="quote"
            />
            <Scrivito.ContentTag
                tag="footer"
                className="blockquote-footer"
                content={widget}
                attribute="author"
            />
            </blockquote>

    );
});

