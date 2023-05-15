import ContentLayout from '../layouts/ContentLayout'
import TaskList from '../components/tasks/TaskList'
import TaskDetails from '../components/tasks/TaskDetails'

export default function Tasks() {
  return (
    <ContentLayout
      contentType={'Tasks'}
      contentElement={<TaskDetails />}
      contentList={<TaskList />}
    />
  )
}
