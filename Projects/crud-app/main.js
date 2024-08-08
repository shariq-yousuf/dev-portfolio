const container = document.querySelector(".data-container")
const nameInput = document.querySelector("#name-input")
const majorInput = document.querySelector("#major-input")
const form = document.querySelector("form")
const submitBtn = document.querySelector(".submit-btn")

const url = "http://localhost:4000/api/v1/students"
let isEditing = false
let currentId = null

const displayData = (students) => {
  students.forEach(({ name, major, id }) => {
    const card = document.createElement("div")
    card.className = "card"

    card.innerHTML = `
            <h3>Name: ${name}</h3>
            <h4>Major: ${major}</h4>
            <div class="action-btn">
                <button class="delete-btn" data-id="${id}">Delete</button>
                <button class="edit-btn" data-id="${id}">Edit</button>
            </div>
        `
    // <button class="details-btn">details</button>
    container.appendChild(card)
  })

  const deleteBtns = document.querySelectorAll(".delete-btn")
  deleteBtns.forEach((deleteBtn) =>
    deleteBtn.addEventListener("click", deleteData)
  )

  const editBtns = document.querySelectorAll(".edit-btn")
  editBtns.forEach((editBtn) => editBtn.addEventListener("click", editData))
}

const postData = async (id) => {
  const newStudentObj = {
    name: nameInput.value,
    major: majorInput.value,
  }

  if (isEditing) {
    await fetch(`${url}/${currentId}`, {
      method: "PATCH",
      body: JSON.stringify(newStudentObj),
      headers: {
        "Content-Type": "application/json",
      },
    })

    container.innerHTML = ""
    getData()
  } else {
    try {
      const response = await fetch(url, {
        method: "POST",
        body: JSON.stringify(newStudentObj),
        headers: {
          "Content-Type": "application/json",
        },
      })
      const data = await response.json()
      displayData([data.data.newStudent])
    } catch (err) {
      console.error("fetch post error")
    }
  }

  nameInput.value = ""
  majorInput.value = ""
  submitBtn.textContent = "Submit"
  isEditing = false
  currentId = null
}

const deleteData = async (e) => {
  const id = e.target.dataset.id
  const card = e.target.closest(".card")

  try {
    await fetch(`${url}/${id}`, {
      method: "DELETE",
    })
  } catch (err) {
    console.error("fetch delete error:", err)
  }

  card.remove()
}

const editData = async (e) => {
  const id = e.target.dataset.id
  currentId = id
  isEditing = true

  try {
    const response = await fetch(`${url}/${id}`)
    const data = await response.json()

    const { name, major } = data.data.student
    nameInput.value = name
    majorInput.value = major
  } catch (error) {
    console.error("patch error:", error)
  }

  submitBtn.textContent = "Save"
}

const getData = async () => {
  try {
    const response = await fetch(url)
    const data = await response.json()

    displayData(data.data.students)
  } catch (err) {
    console.error("fetch get error:", err)
  }
}
getData()

form.addEventListener("submit", postData)
