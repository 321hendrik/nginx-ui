import { Tag } from 'ant-design-vue'
import type { Column } from '@/components/StdDesign/types'
import type { customRender } from '@/components/StdDesign/StdDataDisplay/StdTableTransformer'
import { datetime } from '@/components/StdDesign/StdDataDisplay/StdTableTransformer'
import { NotificationTypeT } from '@/constants'
import { detailRender } from '@/components/Notification/detailRender'

const columns: Column[] = [{
  title: () => $gettext('Type'),
  dataIndex: 'type',
  customRender: (args: customRender) => {
    if (args.text === NotificationTypeT.Error) {
      return <Tag color="error">
        { $gettext('Error') }
      </Tag>
    }
    else if (args.text === NotificationTypeT.Warning) {
      return <Tag color="warning">
      { $gettext('Warning') }
    </Tag>
    }
    else if (args.text === NotificationTypeT.Info) {
      return <Tag color="info">
      { $gettext('Info')}
    </Tag>
    }
    else if (args.text === NotificationTypeT.Success) {
      return <Tag color="success">
      { $gettext('Success') }
    </Tag>
    }
  },
  sorter: true,
  pithy: true,
}, {
  title: () => $gettext('Title'),
  dataIndex: 'title',
  customRender: (args: customRender) => {
    return h('span', $gettext(args.text))
  },
  pithy: true,
}, {
  title: () => $gettext('Details'),
  dataIndex: 'details',
  customRender: detailRender,
  pithy: true,
}, {
  title: () => $gettext('Created at'),
  dataIndex: 'created_at',
  sorter: true,
  customRender: datetime,
  pithy: true,
}, {
  title: () => $gettext('Action'),
  dataIndex: 'action',
}]

export default columns
