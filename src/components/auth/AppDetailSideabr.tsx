const AppDetailSidebar = ({ onVisaGrantClick }: { onVisaGrantClick: () => void }) => {


  return (
    <div className="sidebar">
      <div className="section">
        <div className="section-title">Menu</div>
        <ul>
          <li>
            <b>Application home</b>
          </li>
          <li>
            <b>Messages</b>
          </li>
          <li>
            <b>Update details</b>
          </li>
          <li onClick={onVisaGrantClick} style={{ cursor: 'pointer' }}>
            <b>Visa grant details</b>
          </li>
        </ul>
      </div>
      <div className="section">
        <div className="section-title">Actions</div>
        <ul>
          <li >
            <b>View attachments</b>
          </li>
          <li>
            <b>Biometrics collection</b>
          </li>
        </ul>
      </div>
      
    </div>
  );
};

export default AppDetailSidebar;
