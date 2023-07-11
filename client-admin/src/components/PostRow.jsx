function PostRow({item, i}) {

    function formatDate (date) {
        return new Intl.DateTimeFormat('en-EN', { dateStyle: 'full',
          timeStyle: "medium"}).format(new Date(date))
    }

    return (
        <tr>
            <th scope="row">{i+1}</th>
            <td>{item.title}</td>
            <td>{item.authorId}</td>
            <td>{item.categoryId}</td>
            <td>{item.content.substring(0, 120) + " ..."}</td>
            <td>{formatDate(item.createdAt)}</td>
        </tr>
    )
}   

export default PostRow