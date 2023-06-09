import Accordion from "../components/Accordion";

function AccordionPage() {
    const items = [
        {
            id:'grgr',
           label: 'can I use React on a project?',
           content: 'you can use React on any project you want. you can use React on any project you want. you can use React on any project you want. you can use React on any project you want. you can use React on any project you want. you can use React on any project you want. you can use React on any project you want. '
        },
        {
            id:'sfffdg',
            label: 'can I use Javascript on a project?',
           content: 'you can use React on any project you want. you can use React on any project you want. you can use React on any project you want. you can use React on any project you want. you can use React on any project you want. you can use React on any project you want. you can use React on any project you want. '
        },
        {
            id:'fergreg',
            label: 'can I use CSS on a project?',
           content: 'you can use React on any project you want. you can use React on any project you want. you can use React on any project you want. you can use React on any project you want. you can use React on any project you want. you can use React on any project you want. you can use React on any project you want. '
        },
    ];

    return <Accordion items={items} />;
}

export default AccordionPage;