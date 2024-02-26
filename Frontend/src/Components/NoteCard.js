import React, { useState } from "react";
import SellIcon from "@mui/icons-material/Sell";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import ArchiveOutlinedIcon from "@mui/icons-material/ArchiveOutlined";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";
import BasicModal from "./EditNoteModal";

const NoteCard = ({ title, description, tag }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };
  return (
    <div className="card">
      <div className="card-body">
        <div className="card-header">
          <div className="card-tag">
            <SellIcon className="CardTagIcon" sx={{ fontSize: 11 }} />
            <div className="CardTagText">{tag}</div>
          </div>

          <div>
            {/* Edit Button */}
            <div className="CardActionIconEncloser">
              <EditOutlinedIcon
                onClick={() => {
                  console.log("Clicked");
                  handleOpen(true);
                }}
                className="CardActionIcon"
                sx={{ fontSize: 20 }}
              />
            </div>

            {/* Modal */}
            {isModalOpen && (
              <BasicModal
                initialTitle={"sdf"}
                initialDescription={"dsfdsf"}
                initialTag={"karandeep"}
              />
            )}
          </div>
        </div>

        <div className="card-title">{title}</div>

        <div className="card-description">{description}</div>

        <div
          className="blank-space-to-accomodate-absolute-footer"
          style={{ height: "50px" }}
        ></div>

        <div className="card-footer">
          <div className="CardFooterLeft">
            <div className="CardActionIconEncloser">
              <FavoriteBorderOutlinedIcon
                className="CardActionIcon"
                sx={{ fontSize: 20 }}
              />
            </div>
          </div>

          <div className="CardFooterRight">
            <div className="CardActionIconEncloser">
              <ArchiveOutlinedIcon
                className="CardActionIcon"
                sx={{ fontSize: 20 }}
              />
            </div>

            <div className="CardActionIconEncloser">
              <DeleteOutlinedIcon
                className="CardActionIcon"
                sx={{ fontSize: 20 }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NoteCard;
