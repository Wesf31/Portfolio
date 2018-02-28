insert into info (infopageheader, infopagetextbody, smallbox1header, smallbox1text, smallbox2header, smallbox2text)
    values ($1, $2, $3, $4, $5, $6)
    returning *;