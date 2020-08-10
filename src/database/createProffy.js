module.exports = async function(db,{ proffyValue,classValue,classScheduleValues }){
    //inserir dados na tabela proffys
    //os metodos do sqlite precisam ser iniciados com crase
    const insertedProffy = await db.run(` 
        INSERT INTO proffys(
            name,
            avatar,
            whatsapp,
            bio
        ) VALUES (
            "${proffyValue.name}",
            "${proffyValue.avatar}",
            "${proffyValue.whatsapp}",
            "${proffyValue.bio}"
        );
    `)

    const proffy_id = insertedProffy.lastID
    //inserir dados na tabela class
    const insertedClass = await db.run(`
        INSERT INTO classes(
            subject,
            cost,
            proffy_id
        ) VALUES (
            "${classValue.subject}",
            "${classValue.cost}",
            "${proffy_id}"
        );
    `)
 
    const class_id = insertedClass.lastID
    
    //inserir dados na tabela schedule
    //No JS o array tem algumas propriedades, por isso pode-se utilizar o map
    //os maps roda um função sob os itens do array e cria um novo objeto
    const insertedAllClassScheduleValues = classScheduleValues.map((classScheduleValue) => {
        return db.run(`
            INSERT INTO class_schedule (
                class_id,
                weekday,
                time_from,
                time_to
            ) VALUES (
                "${class_id}",
                "${classScheduleValue.weekday}",
                "${classScheduleValue.time_from}",
                "${classScheduleValue.time_to}"
            );
        
        `)
            
    })

    await Promise.all(insertedAllClassScheduleValues)   
}