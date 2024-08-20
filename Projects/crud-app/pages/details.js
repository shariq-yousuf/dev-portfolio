const rootEl = document.querySelector("#root")
const metaTitle = document.querySelector("title")

const url = "http://localhost:4000/api/v1/students"

const displayData = ({ name, age, major, courses }) => {
  metaTitle.textContent = `${name}`

  rootEl.innerHTML = `
       <h2 class="name">${name}</h2>
      <div class="major-container">
        <span class="major">Major: ${major}</span>
        <span class="age">Age: ${age}</span>
      </div>
      <table>
        <thead>
          <tr>
            <th>Course</th>
            <th>Grade</th>
          </tr>
        </thead>
        <tbody></tbody>
      </table>
    `

  const tbody = document.querySelector("tbody")
  courses.forEach((course) => {
    tbody.innerHTML += `
          <tr>
            <td>${course.courseName}</td>
            <td>${course.grade}</td>
          </tr>
      `
  })
}

const getData = async () => {
  const params = new URLSearchParams(location.search)
  const id = params.get("id")

  try {
    const response = await fetch(`${url}/${id}`)
    const data = await response.json()
    console.log(data)
    displayData(data.data.student)
  } catch (err) {
    console.error("fetch get error:", err)
  }
}
getData()
